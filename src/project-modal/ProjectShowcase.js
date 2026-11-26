import React from "react";
import {
    Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter,
    ModalHeader, ModalOverlay, useDisclosure,
} from "@chakra-ui/react";

function ProjectMedia({images, layout}) {
    return (
        <div className={`project-media project-media-${layout || "desktop"}`}>
            {images.map(({src, alt}) => <img key={src} src={src} alt={alt}/>)}
        </div>
    );
}

function ProjectCases({project}) {
    const {introduction, flow, architecture, cases, availability, links, supplementary} = project;

    return (
        <>
            <section className="project-introduction">
                <h3 className="modal-info-heading">개발 배경과 담당 역할</h3>
                <p>{introduction}</p>
                {flow && <p className="modal-info-content">{flow}</p>}
            </section>
            <section>
                <h3 className="modal-info-heading">시스템 아키텍처</h3>
                <p>{architecture}</p>
            </section>
            <section className="project-cases" aria-labelledby="project-cases-heading">
                <h3 id="project-cases-heading" className="modal-info-heading">문제 해결과 실행 화면</h3>
                {cases.map(({heading, paragraphs, shots = [], mobile}) => (
                    <article className={`project-case${shots.length ? " project-case-with-media" : ""}`} key={heading}>
                        <div>
                            <h4>{heading}</h4>
                            {paragraphs.map(text => <p className="modal-info-content" key={text}>{text}</p>)}
                        </div>
                        {shots.length > 0 && (
                            <div className={mobile ? "project-case-shots project-case-phones" : "project-case-shots"}>
                                {shots.map(({src, caption}) => (
                                    <figure key={src}>
                                        <a href={src} target="_blank" rel="noreferrer" aria-label={caption + " 이미지 원본 열기"}>
                                            <img src={src} alt="" loading="lazy"/>
                                        </a>
                                        <figcaption>{caption}</figcaption>
                                    </figure>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </section>
            <section>
                <h3 className="modal-info-heading">GitHub 및 서비스</h3>
                {availability && <p>{availability}</p>}
                {supplementary && (
                    <p className="project-links">
                        <a href={supplementary.src} target="_blank" rel="noreferrer">{supplementary.caption} 열기</a>
                    </p>
                )}
                {links && (
                    <div className="project-links">
                        {links.map(({href, label}) => (
                            <a key={href} href={href} target="_blank" rel="noreferrer">{label}</a>
                        ))}
                    </div>
                )}
            </section>
        </>
    );
}

function StackTags({stack}) {
    return stack.split(" · ").map((technology, index) => (
        <React.Fragment key={technology}>
            {index > 0 && " · "}
            <span className="project-stack-tag">{technology}</span>
        </React.Fragment>
    ));
}

export function ProjectShowcase({project, children}) {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const {title, theme, summary, period, status, cover, layout, highlights, stack, cardStack = stack} = project;

    return (
        <article className="project-box showcase-card" data-project-theme={theme}>
            <div className="project-card">
                <ProjectMedia images={cover.map(image => ({...image, alt: ""}))} layout={layout}/>
                <div className="project-card-copy">
                    <p className="project-period">{period}{status && " · " + status}</p>
                    <div className="project-card-title">
                        <h3>{title}</h3>
                        <button className="project-card-button" type="button" onClick={onOpen} aria-label={title + " 더보기"}>
                            자세히 보기
                        </button>
                    </div>
                    <p className="project-card-summary">{summary}</p>
                    <p className="project-highlights">{highlights}</p>
                    <p className="project-card-stack"><StackTags stack={cardStack}/></p>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} size="5xl" scrollBehavior="inside" isCentered>
                <ModalOverlay bg="blackAlpha.700"/>
                <ModalContent className="project-dialog" data-project-theme={theme} p={0} w="calc(100% - 24px)" maxW="1060px">
                    <ModalHeader className="project-dialog-header">
                        <p className="project-period">{period}{status && " · " + status}</p>
                        <h2>{title}</h2>
                    </ModalHeader>
                    <ModalCloseButton className="project-dialog-close" aria-label="닫기"/>
                    <ModalBody className="project-dialog-body">
                        <p className="project-dialog-summary">{summary}</p>
                        <p className="project-dialog-stack"><strong>기술 스택</strong> <StackTags stack={stack}/></p>
                        {children || (
                            <>
                                <ProjectMedia images={cover} layout={layout}/>
                                <ProjectCases project={project}/>
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter className="project-dialog-footer">
                        <Button fontSize="1.4rem" variant="unstyled" onClick={onClose}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </article>
    );
}
