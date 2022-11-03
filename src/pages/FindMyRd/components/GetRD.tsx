import React from 'react';
import component from './_components.module.scss';
import { Students, Branches } from '../../../api/Students';
import { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import Card from "./Card";
export default function GetRD() {
    const [loading, SetLoading] = useState(false);
    const [value, SetValue] = useState("026");
    const [branch, SetBranch] = useState(Branches[0]);
    const [students, SetStudent] = useState([]);

    useEffect(() => {

        const FindMyRd = (EnteredRollNo: string) => {

            if (EnteredRollNo && EnteredRollNo.match(/^[0-9a-z]+$/)) {
                return Students().filter((stud: { Branch: any; }) => {
                    return stud.Branch === branch
                }).filter((stud: { RollNo: string; }) => {
                    return stud.RollNo.substr(stud.RollNo.length - 3) === EnteredRollNo
                })
            }
            else console.log("enter valid type of roll no")

        }




        SetStudent(FindMyRd(value))
        SetLoading(false)

    }, [branch, value])

    return (
        <>
            <div className={'d-flex align-items-center ' + component.searchSection}>

                <div className={'G_Form-element ' + component.search}>
                    <input type="search"
                        name="name"
                        className={"G_Form-input mb-0 " + component.SearchBar}
                        placeholder="Enter the Last 3 digits of your RollNo."
                        value={value}
                        onChange={(e) => SetValue(e.target.value)} />
                </div>

                <div className={'G_Form-element ' + component.filter}>

                    <select
                        value={branch}
                        onChange={e => SetBranch(e.target.value)}
                        className={"G_Form-select " + component.select}
                    >

                        {Branches.map((branch: string, index: number) => {
                            return <option value={branch} key={index}>{branch}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className={component.Result}>
                {students && students.map((stud: any, index: number) => {
                    return <Card student={stud} key={index} />
                })
                }
            </div>
            {loading && <Loader />}

        </>)

}