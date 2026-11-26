import React, { act } from "react";
import "@testing-library/jest-dom";
import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChakraProvider, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure } from "@chakra-ui/react";
import { PetmilyModal } from "./PetmilyModal";

function Preview() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return <ChakraProvider>
        <button onClick={onOpen}>Petmily 열기</button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent aria-label="Petmily 상세">
                <ModalCloseButton aria-label="상세 닫기" />
                <ModalBody><PetmilyModal /></ModalBody>
            </ModalContent>
        </Modal>
    </ChakraProvider>;
}

test("Petmily opens, shows screenshots and technical documentation, expands by keyboard and closes", async () => {
    const user = userEvent;
    render(<Preview />);
    await act(async () => { user.click(screen.getByRole("button", { name: "Petmily 열기" })); });
    const dialog = screen.getByRole("dialog", { name: "Petmily 상세" });
    const content = within(dialog);
    expect(content.getByRole("heading", { name: "담당 역할" })).toBeTruthy();
    const documentation = content.getByRole("link", { name: "Petmily 기술문서 읽기 (GitHub · 새 탭)" });
    expect(documentation.getAttribute("href")).toMatch(/docs\/PETMILY_TECHNICAL_DOCUMENTATION.md$/);
    expect(content.getByRole("link", { name: /소스코드 저장소/ }).getAttribute("href")).not.toEqual(documentation.getAttribute("href"));
    expect(content.getAllByRole("img")).toHaveLength(14);
    expect(content.getByText(/초기 Refresh Token Rotation·DB 처리 기반은 팀/)).toBeTruthy();
    expect(content.getByRole("heading", { name: "주요 기능 화면" })).toBeTruthy();
    expect(content.getByRole("heading", { name: "기술 구현 및 보안 개선" })).toBeTruthy();
    const jwt = content.getByRole("button", { name: /JWT Role 처리와 요청 흐름/ });
    expect(jwt.getAttribute("aria-expanded")).toBe("false");
    await act(async () => { jwt.focus(); user.keyboard("{Enter}"); });
    expect(jwt.getAttribute("aria-expanded")).toBe("true");
    expect(content.getByRole("img", { name: /JWT Role 처리와 요청 흐름 — 실제 코드 기반 설명도/ })).toBeTruthy();
    await act(async () => { jwt.focus(); await user.keyboard("{Enter}"); });
    expect(jwt.getAttribute("aria-expanded")).toBe("false");
    await waitFor(() => expect(content.getAllByRole("img")).toHaveLength(14));
    const axios = content.getByRole("button", { name: "Axios 재발급·재요청 처리" });
    expect(axios.getAttribute("aria-expanded")).toBe("false");
    await act(async () => { axios.focus(); user.keyboard("{Enter}"); });
    expect(axios.getAttribute("aria-expanded")).toBe("true");
    await waitFor(() => expect(content.getByText(/원 요청은 axiosInstance로 재시도합니다/)).toBeVisible());
    const axiosDocumentation = content.getByRole("link", { name: "Axios 재발급·재요청 처리 관련 기술문서 보기" });
    expect(axiosDocumentation).toHaveAttribute(
        "href",
        `${documentation.getAttribute("href")}#10-axios-및-프론트백엔드-연동`,
    );
    await act(async () => { user.keyboard("{Escape}"); });
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    expect(document.activeElement).toBe(screen.getByRole("button", { name: "Petmily 열기" }));
});
