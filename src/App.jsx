import React, { useState } from "react";
import "./App.css";

function App() {
  const [plans, setPlans] = useState([
    { id: 1, title: "리액트공부하기", comment: "리액트 기초를 공부해봅시다" },
    // {id:2, title: "제목2", comment: "내용2"},
    // {id:3, title: "제목3", comment: "내용3"},
    // {id:4, title: "제목4", comment: "내용4"},
  ]);

  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  //onChange변수할당
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const commentChangeHandler = (event) => {
    setComment(event.target.value);
  };

  //추가하기 버튼 변수할당 및 카드추가
  const clickAddButtonHandler = () => {
    const newPlan = {
      id: plans.length + 1,
      title,
      comment,
    };
    //배열 불변성 유지
    setPlans([...plans, newPlan]);
  };

  //삭제 버튼 변수할당 및 카드삭제
  const clickRemoveButtonHandler = (id) => {
    const newPlans = plans.filter((plan) => plan.id !== id);
    setPlans(newPlans);
  };

  //완료 버튼 클릭이벤트
  const clickCompleteButtonHandler = () => {
    alert("Hi");
  };

  return (
    <div className="">
      <div className="container">
        <div>My Todo List</div>
        <div>React</div>
      </div>
      {/* <form > */}
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input value={title} onChange={titleChangeHandler} />

          <label className="form-label">내용</label>
          <input value={comment} onChange={commentChangeHandler} />
        </div>

        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>
      {/* </form> */}
      <div className="app-style">
        {plans.map((item) => {
          return (
            <div key={item.id} className="component-style">
              <h2>{item.title}</h2>
              <div>{item.comment}</div>
              <button onClick={() => clickRemoveButtonHandler(item.id)}>
                삭제하기
              </button>
              <button onClick={clickCompleteButtonHandler}>완료</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
