import React, { useState } from "react";
import "./App.css";

function App() {
  const [plans, setPlans] = useState([
    {
      id: 0,
      title: "리액트공부하기",
      comment: "리액트 기초를 공부해봅시다",
      finished: true,
    },
    {
      id: 1,
      title: "리액트공부하기",
      comment: "리액트 기초를 공부해봅시다",
      finished: false,
    },
  ]);
  //state 설정
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  //onChange title
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //onChange comment
  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  //추가하기 버튼 변수할당 및 카드추가
  const clickAddButtonHandler = () => {
    const newPlan = {
      id: plans.length + 1,
      title,
      comment,
      finished: false,
    };

    alert("할 일이 추가되었어요!✍🏻");

    //배열 불변성 유지
    setPlans([...plans, newPlan]);

    //카드 추가하고 리셋
    setTitle("");
    setComment("");
  };

  //삭제 버튼 변수할당 및 카드삭제
  const clickRemoveButtonHandler = (id) => {
    const deletePlans = plans.filter((plan) => plan.id !== id);
    setPlans(deletePlans);
  };

  // 완료 버튼 클릭시 박스 아래로 이동
  const clickFinishedButtonHandler = (id) => {
    const planIndex = plans.findIndex((plan) => plan.id === id);
    const completedPlan = plans[planIndex];

    // 완료한 카드와 함께 업데이트할 카드 목록
    const updatedPlans = plans.filter((plan) => plan.id !== id);
    updatedPlans.push({
      ...completedPlan,
      finished: true,
    });

    setPlans(updatedPlans);
    alert("고생했다!❤️");
  };

  // 취소 버튼 클릭시 박스 위로 이동
  const clickCanceledButtonHandler = (id) => {
    const canceledPlan = plans.find((plan) => plan.id === id);

    // 취소한 카드와 함께 업데이트할 카드 목록
    const updatedPlans = [
      ...plans.filter((plan) => plan.id !== id),
      { ...canceledPlan, finished: false },
    ];

    setPlans(updatedPlans);
    alert("포기하지마!😂");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <h3> My Todo List </h3>
        </header>

        {/* form 부분*/}
        <div className="add-form">
          <div className="input-group">
            <label className="form-label">제목</label>
            <input
              className="input-box"
              value={title}
              onChange={titleChangeHandler}
            />

            <label className="form-label">내용</label>
            <input
              className="input-box"
              value={comment}
              onChange={commentChangeHandler}
            />
          </div>

          <button className="form-btn" onClick={clickAddButtonHandler}>
            추가하기
          </button>
        </div>

        {/* 위쪽 카드부분 */}
        <h3>Burning...🔥</h3>
        <div className="list-style">
          {plans
            .filter((plans) => plans.finished !== true)
            .map((item) => {
              return (
                <div key={item.id} className="component-style">
                  <h2>{item.title}</h2>
                  <div>{item.comment}</div>
                  <div className="btn">
                    <button
                      className="delete-btn"
                      onClick={() => clickRemoveButtonHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="com-can-btn"
                      onClick={() => {
                        clickFinishedButtonHandler(item.id);
                      }}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* 아래쪽 카드부분 */}
        <h3>Done...🎉</h3>
        <div className="list-style">
          {plans
            .filter((plans) => plans.finished === true)
            .map((item) => {
              return (
                <div key={item.id} className="component-style">
                  <h2>{item.title}</h2>
                  <div>{item.comment}</div>
                  <div className="btn">
                    <button
                      className="delete-btn"
                      onClick={() => clickRemoveButtonHandler(item.id)}
                    >
                      삭제하기
                    </button>
                    <button
                      className="com-can-btn"
                      onClick={() => clickCanceledButtonHandler(item.id)}
                    >
                      취소
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
