import * as React from 'react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTable from '../../components/BasicTable';
import Breadcrumb from '../../components/Breadcrumb';
import CoverOne from '../../images/cover/cover-01.png';
import { useTutorQuery } from '../../util/ApiServices';

const Tutor = () => {
  const { data, isSuccess } = useTutorQuery();
  const navigate = useNavigate();

  const tutorColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Status',
      accessorKey: 'status',
    },
    {
      header: 'Name',
      accessorKey: 'info.name',
    },
    {
      header: 'Phone number',
      accessorKey: 'info.phone1',
    },
    {
      header: 'Email',
      accessorKey: 'info.email',
    },
    {
      header: 'Employee Status',
      accessorKey: 'employee_status',
    },
    {
      header: 'No. of Jobs',
      accessorKey: 'jobs',
    },
    {
      header: 'Work experience(hours)',
      accessorKey: 'work_hour',
    },
    {
      header: 'Tags',
      accessorKey: 'tag',
    },
  ];
  return (
    <>
      <Breadcrumb pageName="Tutor" />

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
            handleAdd={() => {
              navigate('/tutor/tutor-add');
            }}
            data={data}
            columns={tutorColumns}
          />
        )}
      </div>
    </>
  );
};

export default Tutor;
