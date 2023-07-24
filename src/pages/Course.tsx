import * as React from 'react';
import { useMemo } from 'react';
import BasicTable from '../components/BasicTable';
import Breadcrumb from '../components/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { useCourseQuery } from '../util/ApiServices';

//import courses from '../mock/COURSE_DATA.json'; // DELETE: mock data

const Course = () => {
  const { data, isSuccess } = useCourseQuery();
  console.log(data);

  const courseColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Course ID',
      accessorKey: 'courseID',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    },
    {
      header: 'Course Name',
      accessorKey: 'courseName',
    },
    {
      header: 'Difficulty',
      accessorKey: 'difficulty',
    },
    {
      header: 'Description',
      accessorKey: 'description',
    },
    {
      header: 'Remark',
      accessorKey: 'remark',
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Course" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        {isSuccess && <BasicTable data={data} columns={courseColumns} />}
      </div>
    </>
  );
};

export default Course;
