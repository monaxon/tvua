import React from "react";
import ReactDataGrid from "react-data-grid";
import "styles/SabteGheybat.css";

const columns = [
  { key: "descriptions", name: "توضیحات" },
  { key: "teacher", name: "مدرس" },
  { key: "field", name: "رشته" },
  { key: "lesson", name: "درس" },
  { key: "base", name: "مقطع" },
  { key: "hour", name: "ساعت" },
  { key: "day", name: "روز" },
  { key: "date", name: "تاریخ" }
];

const rows = [
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  },
  {
    date: "",
    day: "",
    hour: "",
    base: "",
    lesson: "",
    field: "",
    teacher: "",
    descriptions: ""
  }
];

function SabteGheybat(props) {
  return (
    <div className="Main">
      <p id="title">ثبت غیبت</p>
      <div className="controls">
        <div className="buttons">
          <div className="button">حذف</div>
          <div className="button">ویرایش</div>
          <div className="button">جدید</div>
        </div>
        <div className="daneshkade">
          <select className="select">
            <option value="shamsipour">شهید شمسی پور</option>
          </select>
          <p>دانشکده</p>
        </div>
      </div>
      <div>
        <ReactDataGrid
          columns={columns}
          rowGetter={i => rows[i]}
          rowsCount={rows.length}
          minHeight={"80vh"}
          sortable={true}
        />
      </div>
    </div>
  );
}

export default SabteGheybat;
