import React, { useState } from "react";
import "./App.css";

function App() {
  const [plans, setPlans] = useState([
    {
      id: 0,
      title: "리액트공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
    {
      id: 1,
      title: "리액트공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
  ]);
  //useState
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //onChange title
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  //onChange body
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  //추가하면  카드추가
  const addButtonHandler = () => {
    const newPlan = {
      id: plans.length + 1,
      title,
      body,
      isDone: false,
    };

    alert("할 일이 추가되었어요!✍🏻");

    //배열 불변성
    setPlans([...plans, newPlan]);

    //카드 추가버튼 클릭하고, 추가되면 인풋 리셋
    setTitle("");
    setBody("");
  };

  //삭제 버튼 클릭시 카드삭제
  const clickRemoveButtonHandler = (id) => {
    const removePlans = plans.filter((plan) => plan.id !== id);
    setPlans(removePlans);
  };

  // 완료 버튼 클릭시 카드 아래로 이동 + 원래카드 삭제
  const clickCompletedButtonHandler = (id) => {
    const completedPlan = plans.filter((plan) => plan.id === id)[0];

    if (!completedPlan) {
      return;
    }

    const updatedPlans = plans.filter((plan) => plan.id !== id);
    updatedPlans.push({ ...completedPlan, isDone: true });

    setPlans(updatedPlans);
    alert("고생했다!❤️");
  };

  // 취소 버튼 클릭시 카드 위로 이동 + 원래카드 삭제
  const clickCanceledButtonHandler = (id) => {
    const canceledPlan = plans.filter((plan) => plan.id === id)[0];

    if (!canceledPlan) {
      return;
    }

    const updatedPlans = plans.filter((plan) => plan.id !== id);
    updatedPlans.push({ ...canceledPlan, isDone: false });

    setPlans(updatedPlans);
    alert("포기하지마!😂");
  };
  return (
    <div className="container">
      <div className="wrapper">
        <header>
          <h3> My Todo List </h3>
        </header>

        {/* input 부분*/}
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
              value={body}
              onChange={bodyChangeHandler}
            />
          </div>
          <button className="form-btn" onClick={addButtonHandler}>
            추가하기
          </button>
        </div>

        {/* 위쪽 카드부분  (삭제, 완료)*/}
        <h3>Burning...🔥</h3>
        <div className="list-style">
          {plans
            .filter((plans) => plans.isDone !== true)
            .map((item) => {
              return (
                <div key={item.id} className="component-style">
                  <h2>{item.title}</h2>
                  <div>{item.body}</div>
                  <div className="btn">
                    <button
                      className="delete-btn"
                      onClick={() => clickRemoveButtonHandler(item.id)}
                    >
                      삭제
                    </button>
                    <button
                      className="com-can-btn"
                      onClick={() => {
                        clickCompletedButtonHandler(item.id);
                      }}
                    >
                      완료
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {/* 아래쪽 카드부분(삭제, 취소) */}
        <h3>Done...🎉</h3>
        <div className="list-style">
          {plans
            .filter((plans) => plans.isDone === true)
            .map((item) => {
              return (
                <div key={item.id} className="component-style">
                  <h2>{item.title}</h2>
                  <div>{item.body}</div>
                  <div className="btn">
                    <button
                      className="delete-btn"
                      onClick={() => clickRemoveButtonHandler(item.id)}
                    >
                      삭제
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
