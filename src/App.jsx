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
    setPlans([...plans, newPlan]);
    setTitle("");
    setComment("");
    alert("할 일이 추가되었어요!✍🏻");

    //배열 불변성 유지
    setPlans([...plans, newPlan]);
  };

  //삭제 버튼 변수할당 및 카드삭제
  const clickRemoveButtonHandler = (id) => {
    const deletePlans = plans.filter((plan) => plan.id !== id);
    setPlans(deletePlans);
  };

  // 완료 + 취소버튼 클릭시 카드삭제

  const clickDoneButtonHandler = (id) => {
    const donePlans = plans.filter((plan) => plan.id !== id);
    setPlans(donePlans);
  };

  //완료 버튼 클릭시 박스 아래로 이동 + 이벤트
  const clickFinishedButtonHandler = (id) => {
    const planId = id - 1;
    const finishedList = {
      id,
      title: plans[planId].title,
      comment: plans[planId].comment,
      finished: true,
    };
    setPlans([...plans, finishedList]);
    alert("고생했다!❤️");
  };

  //취소 버튼 클릭시 박스 아래로 이동 + 이벤트
  const clickCanceledButtonHandler = (id) => {
    const planId = id + 1;
    const canceledList = {
      id,
      title: plans[planId].title,
      comment: plans[planId].comment,
      finished: false,
    };
    setPlans([...plans, canceledList]);
    alert("힘내 화이팅!👏🏻");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <h3> My Todo List </h3>
        </div>
        {/* <form > */}
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
        {/* </form> */}
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
                      onClick={() => clickFinishedButtonHandler(item.id)}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* </form> */}
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
