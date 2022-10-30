import React, { useState } from 'react';


function MuiApplyJob() {

    const [job_applied_for, setJob_Applied_For] = useState("");
    const [first_name, setFirst_Name] = useState("");
    const [last_name, setLast_Name] = useState("");
    const [date_of_birth, setDate_Of_Birth] = useState("");
    const [highest_qualification, setHighest_Qualification] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [years_of_experience, setYears_Of_Experience] = useState("");
    const [nationality, setNationality] = useState("");
    const [gender, setGender] = useState("");
    const [cv, setCV] = useState();

    const newApplication = () => {
        const uploadData = new FormData();
        uploadData.append('job_applied_for', job_applied_for);
        uploadData.append('first_name', first_name);
        uploadData.append('last_name', last_name);
        uploadData.append('date_of_birth', date_of_birth);
        uploadData.append('highest_qualification', highest_qualification);
        uploadData.append('email', email);
        uploadData.append('phone', phone);
        uploadData.append('years_of_experience', years_of_experience);
        uploadData.append('nationality', nationality);
        uploadData.append('gender', gender);
        uploadData.append('cv', cv);

        fetch('http://127.0.0.1:8000/api/applications/', {
            method: 'POST',
            body: uploadData
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }


    return (
        <div className="App">
            <h3>Submit Your Job Application</h3>
            <label>
                Job Applied For
                <input type="text" value={job_applied_for} onChange={(evt) => setJob_Applied_For(evt.target.value)} />
            </label>
            <br />

            <label>
                First Name
                <input type="text" value={first_name} onChange={(evt) => setFirst_Name(evt.target.value)} />
            </label>
            <br />

            <label>
                Last Name
                <input type="text" value={last_name} onChange={(evt) => setLast_Name(evt.target.value)} />
            </label>
            <br />

            <label>
                Date of Birth
                <input type="text" value={date_of_birth} onChange={(evt) => setDate_Of_Birth(evt.target.value)} />
            </label>
            <br />

            <label>
                Highest Qualification
                <input type="text" value={highest_qualification} onChange={(evt) => setHighest_Qualification(evt.target.value)} />
            </label>
            <br />

            <label>
                Email Address
                <input type="text" value={email} onChange={(evt) => setEmail(evt.target.value)} />
            </label>
            <br />

            <label>
                Phone Number
                <input type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)} />
            </label>
            <br />

            <label>
                Number of Years of Experience
                <input type="text" value={years_of_experience} onChange={(evt) => setYears_Of_Experience(evt.target.value)} />
            </label>
            <br />

            <label>
                Nationality
                <input type="text" value={nationality} onChange={(evt) => setNationality(evt.target.value)} />
            </label>
            <br />

            <label>
                Gender
                <input type="text" value={gender} onChange={(evt) => setGender(evt.target.value)} />
            </label>
            <br />

            <label>
                Upload CV
                <input type="file" onChange={(evt) => setCV(evt.target.files[0])} />
            </label>
            <br />


            <button onClick={() => newApplication()}>Submit</button>
        </div>
    );
}

export default MuiApplyJob;
