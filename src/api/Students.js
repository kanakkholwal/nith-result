import { ranking, uniq } from "../scripts/customFunctions";
import batch_19 from "./students_19.json";
import batch_20 from "./students_20.json";
import batch_21 from "./students_21.json";

const _batches = [batch_21, batch_20]
let data = [];
_batches.forEach((batch) => data.push(...batch));

data = data.sort((a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) - parseFloat(a.semesters[a.semesters.length - 1].cgpi));

data = uniq(data);
export const Branches = uniq(data.map(({ Branch }) => Branch));
export const Batches = uniq(data.map(({ Batch }) => Batch));

// College Rank (Increasing Order)
const correspondingRanks = ranking(data, (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
data.forEach((stud, index) => {
    stud.College_Rank = correspondingRanks[index];
});

// Year Rank  (Increasing Order)
for (const batch of Batches) {
    const correspondingBatchRanks = ranking(data.filter(({ Batch }) => Batch === batch), (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
    data.filter(({ Batch }) => Batch === batch).forEach((stud, index) => {
        stud.Batch_Rank = correspondingBatchRanks[index];
    });
}
// Branch Rank  (Increasing Order)
for (const branch of Branches) {
    const correspondingBranchRanks = ranking(data.filter(({ Branch }) => Branch === branch), (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
    data.filter(({ Branch }) => Branch === branch).forEach((stud, index) => {
        stud.Branch_Rank = correspondingBranchRanks[index];
    });
}

export const Students = (Batch, Branch) => {
    let fault = batch_19
    fault = fault.filter((stud) => stud.semesters.length === 0)

    console.log(fault);

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

