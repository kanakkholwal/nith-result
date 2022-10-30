import data from "./students.json";
import { ranking, uniq } from "../scripts/customFunctions";


data = data.sort((a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) - parseFloat(a.semesters[a.semesters.length - 1].cgpi));

export const Branches = uniq(data.map(({ Branch }) => Branch));
export const Batches = uniq(data.map(({ Batch }) => Batch));

// Year Rank (Increasing Order)
const correspondingRanks = ranking(data, (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
data.forEach((stud, index) => {
    stud.Year_Rank = correspondingRanks[index];
});

// Branch Rank  (Increasing Order)
Branches.forEach((branch) => {
    const correspondingBranchRanks = ranking(data.filter(({ Branch }) => Branch === branch), (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
    data.filter(({ Branch }) => Branch === branch).forEach((stud, index) => {
        stud.Branch_Rank = correspondingBranchRanks[index];
    });
})

export const Students = (Batch, Branch) => {


    let output = null;
    Batch && (output = data.filter((child) => child.Batch === Batch));
    Branch && (output = data.filter((child) => child.Branch === Branch));
    if (Batch === "")
        output = data;

    if (!Branch && !Batch)
        output = data;

    output = uniq(output);
    // Sort Highest to Lowest Cgpi


    // console.log(output.filter((stud) => stud.semesters[stud.semesters.length - 1] === undefined))




    return output;
}

