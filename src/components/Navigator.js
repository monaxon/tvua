import React from "react";
import "styles/Navigator.css";

function Navigator(props) {
  return (
    <div className="NavBar">
      <div className="navigator">
        <ul className="menu">
          <li className="toppest" id="sabtegheybat">
            <p>ثبت غیبت</p>
          </li>
          <li id="tarif">
            <p>تعاریف</p>
          </li>
          <li id="doroos">
            <p>دروس</p>
          </li>
          <li id="daneshkadeha">
            <p>دانشکده ها</p>
          </li>
          <li id="reshteha">
            <p>رشته ها</p>
          </li>
          <li id="modaresin">
            <p>مدرسین</p>
          </li>
          <li id="gozareshat">
            <p>گزارشات</p>
          </li>
          <li className="bottomest" id="gozareshjame">
            <p>گزارش جامع</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigator;
