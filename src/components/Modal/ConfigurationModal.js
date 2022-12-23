import React, {useState} from "react";

import './ConfigurationModal.scss';
import TimeConfig from "../configuration/TimeConfig";
import AuthConfig from "../configuration/AuthConfig";


const ConfigurationModal = ({closeModal}) => {
    const [menu, setMenu] = useState('time')

    return (
        <div className="configuration-modal">
            <div className="configModal" onClick={closeModal}></div>
            <div className="modalBody">
                <button id="modalCloseBtn" onClick={closeModal}>
                    ✖
                </button>
                <div className="config-modal">
                    <div>
                        <h1 className="config-title">환경설정</h1>
                    </div>
                    <div className="config-box">
                        <div className="config-menu">
                            <p className={menu === 'time' ? 'menu-selected' : ''} onClick={() => {
                                setMenu('time')
                            }}>정규 출퇴근 시간</p>
                            <p className={menu === 'auth' ? 'menu-selected' : ''} onClick={() => {
                                setMenu('auth')
                            }}>관리자 권한</p>
                        </div>
                        <div className="config-content">
                            {menu === 'time' &&
                                <TimeConfig closeModal={closeModal}/>
                            }
                            {menu === 'auth' &&
                                <div>
                                    {/*<p>관리자 권한 설정</p>*/}
                                    <AuthConfig closeModal={closeModal}/>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ConfigurationModal;