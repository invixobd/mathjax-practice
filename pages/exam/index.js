import React from "react";
import Exam from "../../components/Exam";
import { mcqExam } from "../../data/mcqExam";

export default function index({ mcqExam }) {
  return <Exam mcqExam={mcqExam} />;
}

export async function getServerSideProps(context) {
  return {
    props: {
      mcqExam,
    },
  };
}
