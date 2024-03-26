import Card from "../Card";

const Standard = ({ data }: { data: any },) => {
    return (
        <div className="p-2">
            {data?.map((element: any) => (
                <div className="mb-2">
                    <Card element={element} />
                </div>
            ))}
        </div>
    )
}

export default Standard