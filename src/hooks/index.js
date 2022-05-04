import useMainApiMutation from './use-mutation';
import useMainApi from './use-query';

const route = process.env.REACT_APP_SERVER_URL;

const routes = {
  news: '/staff',
  settings: '/staff',
  certificates: '/staff',
  staffs: '/staff',
  events: '/staff',
  surgery: '/staff',
  application: 'staff',
};

//NEWS
export const getAllNews = ({page, size}) => {
  return useMainApi(
    `${route + routes.news}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createNews = () => {
  return useMainApiMutation('post', route + routes.news);
};

export const deleteNews = (id) => {
  return useMainApiMutation('delete', `${route + routes.news}/${id}`);
};

export const editNews = (id)=>{
    return useMainApiMutation('put', `${route + routes.news}/${id}`)
}
export const editNewsPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.news}/${id}`)
}

//SETTINGS
export const getAllSettings = ({page, size}) => {
  return useMainApi(
    `${route + routes.settings}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createSettings = () => {
  return useMainApiMutation('post', route + routes.settings);
};

export const deleteSettings = (id) => {
  return useMainApiMutation('delete', `${route + routes.settings}/${id}`);
};

export const editSettings = (id)=>{
    return useMainApiMutation('put', `${route + routes.settings}/${id}`)
}
export const editSettingsPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.settings}/${id}`)
}
//STAFF
export const getAllStaffs = ({page, size}) => {
  return useMainApi(
    `${route + routes.staffs}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createStaffs = () => {
  return useMainApiMutation('post', route + routes.staffs);
};

export const deleteStaffs = (id) => {
  return useMainApiMutation('delete', `${route + routes.staffs}/${id}`);
};

export const editStaffs = (id)=>{
    return useMainApiMutation('put', `${route + routes.staffs}/${id}`)
}
export const editStaffsPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.staffs}/${id}`)
}
//CERTIFICATES
export const getAllCertificates = ({page, size}) => {
  return useMainApi(
    `${route + routes.certificates}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createCertificates = () => {
  return useMainApiMutation('post', route + routes.certificates);
};

export const deleteCertificates = (id) => {
  return useMainApiMutation('delete', `${route + routes.certificates}/${id}`);
};

export const editCertificates = (id)=>{
    return useMainApiMutation('put', `${route + routes.certificates}/${id}`)
}
export const editCertificatesPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.certificates}/${id}`)
}

//SURGERY
export const getAllSurgery = ({page, size}) => {
  return useMainApi(
    `${route + routes.surgery}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createSurgery = () => {
  return useMainApiMutation('post', route + routes.surgery);
};

export const deleteSurgery = (id) => {
  return useMainApiMutation('delete', `${route + routes.surgery}/${id}`);
};

export const editSurgery = (id)=>{
    return useMainApiMutation('put', `${route + routes.surgery}/${id}`)
}
export const editSurgeryPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.surgery}/${id}`)
}
//EVENTS
export const getAllEvents = ({page, size}) => {
  return useMainApi(
    `${route + routes.events}?page=${page || 1}&size=${size || 10}`,
  );
};

export const createEvents = () => {
  return useMainApiMutation('post', route + routes.events);
};

export const deleteEvents = (id) => {
  return useMainApiMutation('delete', `${route + routes.events}/${id}`);
};

export const editEvents = (id)=>{
    return useMainApiMutation('put', `${route + routes.events}/${id}`)
}
export const editEventsPatch = (id)=>{
    return useMainApiMutation('patch', `${route + routes.events}/${id}`)
}

//APPLICATION
export const getAllApplication = ({page, size}) => {
  return useMainApi(
    `${route + routes.application}?page=${page || 1}&size=${size || 10}`,
  );
};

export const deleteApplication = (id) => {
  return useMainApiMutation('delete', `${route + routes.application}/${id}`);
};
