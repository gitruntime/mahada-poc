import { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    const [approvedApplications, setApprovedApplications] = useState([]);

    const approveApplication = (id) => {
        setApprovedApplications(prev => [...prev, id]);
    };

    return (
        <ApplicationContext.Provider value={{ approvedApplications, approveApplication }}>
            {children}
        </ApplicationContext.Provider>
    );
};

export const useApplications = () => useContext(ApplicationContext);