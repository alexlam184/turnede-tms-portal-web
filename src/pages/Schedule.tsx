import * as React from 'react';
import { useMemo } from 'react';
import BasicTable from '../components/BasicTable';
import Breadcrumb from '../components/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import { useScheduleQuery } from '../util/ApiServices';

const Schedule = () => {
  const { data, isSuccess } = useScheduleQuery();

  const scheduleColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Course ID',
      accessorKey: 'courseID',
    },
    {
      header: 'Course Name',
      accessorKey: 'courseName',
    },
    {
      header: 'Start',
      accessorKey: 'start',
    },
    {
      header: 'End',
      accessorKey: 'end',
    },
    {
      header: 'Client',
      accessorKey: 'client',
    },
    {
      header: 'Location',
      accessorKey: 'location',
    },
    {
      header: 'Repeat',
      accessorKey: 'repeat',
    },
    {
      header: 'End Repeat',
      accessorKey: 'endRepeat',
    },
    {
      header: 'Remark',
      accessorKey: 'remark',
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Schedule" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>
        {isSuccess && (
          <BasicTable
            handleAdd={() => {}}
            data={data}
            columns={scheduleColumns}
          />
        )}
      </div>
    </>
  );
};

export default Schedule;
