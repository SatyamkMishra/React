export default function New({ value, idx, list, setList }) { 
    function del() {
        let newList = list.filter((_, i) => i !== idx);
        setList(newList);
    }
    return (
        <ul className="space-y-2">
            <li className="flex justify-between items-center p-3 bg-gray-200 rounded-lg">
                <span className="text-gray-700">{idx+1}. {value}</span>
                <div className="flex gap-2">
                    {/* <button onClick={edit}
                    className="text-blue-500 text-xl hover:text-blue-700 transition-all">
                        ✎
                    </button> */}
                    <button onClick={del} className="text-red-500 hover:text-red-700">
                        &times;
                    </button>
                    
                </div>
            </li>
        </ul>
    );
}
