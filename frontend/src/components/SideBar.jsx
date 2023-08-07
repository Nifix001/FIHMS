import React from 'react'
import dashIcon from '../assets/sidebar/element-1.png';
import PatientIcon from '../assets/sidebar/bi_people.png';
import doctorIcon from '../assets/sidebar/hospital.png';
import PharmacyIcon from '../assets/sidebar/building-3.png';
import ReportsIcon from '../assets/sidebar/chart.png';
import SettingsIcon from '../assets/sidebar/ant-design_setting-outlined.png';
import SupportIcon from '../assets/sidebar/ic_outline-contact-support.png'

const SideBar = () => {
  return (
    <React.Fragment>
      <div className='w-60 h-143 bg-white absolute left-0 top-20 pl-4 '>
        <header className='mt-7 mb-3'>Menu</header>
        <div className="grid gap-3">
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={dashIcon} alt="dashboard icon" />
                <h3 className='-mt-0.5'>Dashboard</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={PatientIcon} alt="patient icon" />
                <h3 className='-mt-0.5'>Patients</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={doctorIcon}alt="doctor icon" />
                <h3 className='-mt-0.5'>Doctor</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={PharmacyIcon} alt="pharmacy icon" />
                <h3 className='-mt-0.5'>Pharmacy</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={ReportsIcon} alt="reports icon" />
                <h3 className='-mt-0.5'>Reports</h3>
            </div>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={SettingsIcon} alt="settings icon" />
                <h3 className='-mt-0.5'>Settings</h3>
            </div>
        </div>
        <div className='grid absolute bottom-20'>
            <hr className='w-60' />
            <h3 className='my-4'>General</h3>
            <div className='flex'>
                <img className='w-5 h-5 mr-2' src={SupportIcon} alt="" />
                <h3 className='-mt-0.5'>Support</h3>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBar