import React from "react";

export function WebPortfolioModal() {
  return (
    <>
      <div className="modal-info">
        <h2 className="modal-info-heading">Summary</h2>
        <p className="modal-info-content">

        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Overview</h2>
        <p className="modal-info-content">
          포트폴리오 웹사이트는 제 개발 여정과 역량을 전시하는 취업용
          포트폴리오입니다. React를 사용하여 구축된 이 사이트는 제 자신에 대한
          소개, 포부, 기술 스택, 그리고 경험한 프로젝트들을 선보입니다.
          <br />
          <br />본 사이트에서는 제가 참여한 프로젝트들의 상세한 설명과 함께,
          소스코드 저장소와 개인 블로그로의 링크를 통해 제 기술적 실력과 생각을
          더 깊이 이해할 수 있습니다.
          <br />
          <br />이 웹사이트는 단순한 포트폴리오를 넘어, 제 개발 여정과 지속적인
          학습 과정을 보여주는 플랫폼입니다. 이 사이트에서 제 기술적 성장과
          프로젝트에 대한 열정을 발견할 수 있습니다.
        </p>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Skills</h2>
        <div className="modal-info-skills">
          <h4>Frontend:</h4>
          <p>HTML, CSS, JavaScript, React, ChakraUI</p>
        </div>
        <br />
        <hr />
        <br />
        <h2 className="modal-info-heading">Repository</h2>
        <br />
        <h4>Github</h4>
        <div className="modal-info-content">
          URL:{" "}
          <a href="https://github.com/chaiheung/Web-Portfolio">
            https://github.com/chaiheung/Web-Portfolio
          </a>
        </div>
        <br />
        <br />{" "}
      </div>
    </>
  );
}
