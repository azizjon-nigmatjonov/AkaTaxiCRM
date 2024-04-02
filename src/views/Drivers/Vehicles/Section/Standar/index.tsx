import Card from "../Card";

const Standard = ({ setInputValue, data }: { data: any, setInputValue: any },) => {
    // console.log(data);

    return (
        <div className="p-2">
            {data?.map((element: any) => (
                <div className="mb-2">
                    <Card element={element} setInputValue={setInputValue} />
                </div>
            ))}
        </div>
    )
}

export default Standard