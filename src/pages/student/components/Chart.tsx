import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);





export default function ChartResult({ data }) {
    const student = data;
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Semester Wise Graphical Result',
            },
        },
    };

    const labels = ["1st Year", "2nd Year", "3rd Year", "Final Year"];
    if (student.RollNo.includes("dec") || student.RollNo.includes("dsc") || student.RollNo.includes("bar"))
        labels.push("Super Final Year");

    const evenSemester = student.semesters.filter((semester: { semester: string; }) => parseInt(semester.semester) % 2 === 0);
    const oddSemester = student.semesters.filter((semester: { semester: string; }) => parseInt(semester.semester) % 2 !== 0);

    const data2 = {
        labels,
        datasets: [
            {
                label: 'Odd Semester',
                data: oddSemester.map((semester: { sgpi: any; }) => { return semester.sgpi }),
                backgroundColor: '#a4acff',
            },
            {
                label: 'Even Semester',
                data: evenSemester.map((semester: { sgpi: any; }) => { return semester.sgpi }),
                backgroundColor: '#0d3b4e',
            },
        ],
    };

    return (
        <Bar options={options} data={data2} />

    );
}