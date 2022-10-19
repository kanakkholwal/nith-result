import data from "./data.json";
import { ranking } from "../scripts/customFunctions"
const Students = (Batch, Branch) => {


    var output = null;
    Batch && (output = data.filter((child) => child.Batch === Batch));
    Branch && (output = data.filter((child) => child.Branch === Branch));

    if (!Branch && !Batch)
        output = data;


    // output = uniq(output);
    // Sort Highest to Lowest Cgpi
    output = output.sort((a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) - parseFloat(a.semesters[a.semesters.length - 1].cgpi));

    // Year Rank (Increasing Order)
    const correspondingRanks = ranking(output, (a, b) => parseFloat(b.semesters[b.semesters.length - 1].cgpi) > parseFloat(a.semesters[a.semesters.length - 1].cgpi));
    output.forEach((stud, index) => {
        stud.Year_Rank = correspondingRanks[index];
    });


    return output;
}

export default Students;