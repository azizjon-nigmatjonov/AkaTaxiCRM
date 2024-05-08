import { WrapperCard } from "../../../../components/UI/WrapperCard"
import Filters from "./Filters"
import LineChart from "./LineChart"

const data = [
    {
        "id": "japan",
        "color": "hsl(344, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 10
            },
            {
                "x": "helicopter",
                "y": 69
            },
            {
                "x": "boat",
                "y": 197
            },
            {
                "x": "train",
                "y": 292
            },
            {
                "x": "subway",
                "y": 86
            },
            {
                "x": "bus",
                "y": 214
            },
            {
                "x": "car",
                "y": 86
            },
            {
                "x": "moto",
                "y": 148
            },
            {
                "x": "bicycle",
                "y": 143
            },
            {
                "x": "horse",
                "y": 284
            },
            {
                "x": "skateboard",
                "y": 228
            },
            {
                "x": "others",
                "y": 48
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(195, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 69
            },
            {
                "x": "helicopter",
                "y": 138
            },
            {
                "x": "boat",
                "y": 273
            },
            {
                "x": "train",
                "y": 52
            },
            {
                "x": "subway",
                "y": 159
            },
            {
                "x": "bus",
                "y": 81
            },
            {
                "x": "car",
                "y": 83
            },
            {
                "x": "moto",
                "y": 249
            },
            {
                "x": "bicycle",
                "y": 78
            },
            {
                "x": "horse",
                "y": 239
            },
            {
                "x": "skateboard",
                "y": 299
            },
            {
                "x": "others",
                "y": 225
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(137, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 78
            },
            {
                "x": "helicopter",
                "y": 234
            },
            {
                "x": "boat",
                "y": 118
            },
            {
                "x": "train",
                "y": 81
            },
            {
                "x": "subway",
                "y": 278
            },
            {
                "x": "bus",
                "y": 196
            },
            {
                "x": "car",
                "y": 242
            },
            {
                "x": "moto",
                "y": 263
            },
            {
                "x": "bicycle",
                "y": 2
            },
            {
                "x": "horse",
                "y": 59
            },
            {
                "x": "skateboard",
                "y": 174
            },
            {
                "x": "others",
                "y": 4
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(168, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 14
            },
            {
                "x": "helicopter",
                "y": 15
            },
            {
                "x": "boat",
                "y": 35
            },
            {
                "x": "train",
                "y": 183
            },
            {
                "x": "subway",
                "y": 80
            },
            {
                "x": "bus",
                "y": 113
            },
            {
                "x": "car",
                "y": 101
            },
            {
                "x": "moto",
                "y": 209
            },
            {
                "x": "bicycle",
                "y": 38
            },
            {
                "x": "horse",
                "y": 53
            },
            {
                "x": "skateboard",
                "y": 287
            },
            {
                "x": "others",
                "y": 215
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(150, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 51
            },
            {
                "x": "helicopter",
                "y": 36
            },
            {
                "x": "boat",
                "y": 40
            },
            {
                "x": "train",
                "y": 84
            },
            {
                "x": "subway",
                "y": 62
            },
            {
                "x": "bus",
                "y": 199
            },
            {
                "x": "car",
                "y": 206
            },
            {
                "x": "moto",
                "y": 219
            },
            {
                "x": "bicycle",
                "y": 214
            },
            {
                "x": "horse",
                "y": 215
            },
            {
                "x": "skateboard",
                "y": 15
            },
            {
                "x": "others",
                "y": 173
            }
        ]
    }
]

export const PriceHistory = () => {
    return <WrapperCard>
        <Filters />
        <LineChart data={data} />
    </WrapperCard>
}