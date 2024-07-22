import { useEffect, useState } from "react";
import Card from "./components/Card";
import CardDetails  from "./components/CardDetails";
import axios from "axios";

function App() {
    const [details, setDetails] = useState([]);
    const [formsumbission, setFormsubmission] = useState(false)

    useEffect(() => {
        const getCards = async () => {
            const response = await axios.get("http://localhost:3000/api/cards");
            setDetails(response.data);
        };

        getCards();
    }, [formsumbission]);

    return (
        <div className="flex flex-col space-y-10 my-10 items-center justify-center min-h-screen">
            <CardDetails formsumbission={formsumbission} setFormsubmission={setFormsubmission}></CardDetails>
            {details.map((detail) => (
                <Card key={detail._id} props={detail}></Card>
            ))}
        </div>
    );
}

export default App;
