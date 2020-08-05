import React from 'react';

import TeacherItem from '../../components/TeacherItem/Index';
import PageHeader from '../../components/PageHeader/Index';

import './styles.css';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_say">Dia da Semana</label>
                        <input type="text" id="week_say"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>   

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main> 
        </div>
    )
}

export default TeacherList;