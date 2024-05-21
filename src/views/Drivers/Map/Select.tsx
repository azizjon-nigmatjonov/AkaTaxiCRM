import "./modal.css";
import { useMemo, useState } from "react";
import CSelect from "../../../components/CElements/CSelect";
// import { Regions } from "../../../mixins/regions";
import { usePlaces } from "../../../hooks/usePlaces";

const optionsStatus = [
  {
    value: "pending",
    label: "Aktiv",
  },
  {
    value: "on-way",
    label: "Safardagilar",
  },
];

const classStatus = [
  {
    label: "Standart (45)",
    value: "standart",
  },
  {
    label: "Hammasi",
    value: "all",
  },
  {
    label: "Komfort",
    value: "comfort",
  },
  {
    label: "Biznes",
    value: "business",
  },
];

interface MapOptionProps {
  setSelectData: (data: any) => void;
  setSelectedStatus: (status: any) => void;
  lang: any;
  lat: any;
  setCarClass: (carClass: number) => void;
  selectedStatus: any;
}

function MapOption({
  selectedStatus,
  setSelectedStatus,
  setCarClass,
}: MapOptionProps) {
  const [regionValue, setRegionValue] = useState(22);
  const [typeCar, setTypeCar] = useState<any>("all");
  const { regionList } = usePlaces()

  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);


  const handleCarTypeStatus = (value: any) => {
    setTypeCar(value);
    if (value === "standart") {
      setCarClass(1);
    } else if (value === "comfort") {
      setCarClass(2);
    } else if (value === "business") {
      setCarClass(3);
    }
  };

  const handleSelect = (val: number, type: string) => {
    if (type === "region") {
      setRegionValue(val);
    }
    if (type === "position") {
      setSelectedStatus(val);
    }
    if (type === "class") {
      handleCarTypeStatus(val);
    }
  };

  return (
    <div className="flex gap-3 absolute  left-6">
      {/* <div>
                <h3 className='text-[#151515] font-medium'>Holat</h3>
                <Select
                    value={selectedStatus}
                    onChange={handleStatusChange}

                    className='w-[250px] bg-white'
                    input={<OutlinedInput sx={{ border: 'none' }} />}
                    sx={{
                        height: 44,
                        '&:hover': {
                            borderBottom: 'none',

                        },
                        '&:focus': {
                            borderBottom: 'none',
                            boxShadow: '0 12px 14px rgba(0, 0, 0, 0.2)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                marginTop: '8px',
                            },
                        },
                    }}
                >

                    {optionsStatus.map((item) => (
                        <MenuItem value={item.value} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                            <span className='text-[#151515]'>{item.label} </span> <span className='text-[#858592]'> (100)</span>
                        </MenuItem>

                    ))}


                </Select>
            </div>

            <div>
                <h3 className='text-[#151515] font-medium'>Klass</h3>
                <Select
                    value={typeCar}
                    onChange={handleCarTypeStatus}
                    defaultValue={10}
                    className='w-[250px] bg-white'
                    input={<OutlinedInput sx={{ border: 'none' }} />}
                    sx={{
                        height: 44,
                        '&:hover': {
                            borderBottom: 'none',
                        },
                        '&:focus': {
                            borderBottom: 'none',
                            boxShadow: '0 12px 14px rgba(0, 0, 0, 0.2)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .Mui-selected': {
                            backgroundColor: 'transparent',
                        },

                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                marginTop: '8px',
                            },
                        },
                    }}
                >
                    <MenuItem value={'Standart'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Standart (45) </span>
                    </MenuItem>
                    <MenuItem value={'Hammasi'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Hammasi </span>
                    </MenuItem>
                    <MenuItem value={'Komfort'} className='flex gap-1 lien' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Komfort </span>
                    </MenuItem>
                    <MenuItem value={'Biznes'} className='flex gap-1' sx={{ paddingY: '8px' }}>
                        <span className='text-[#151515]'>Biznes </span>
                    </MenuItem>

                </Select>
            </div>
             */}

      <div className="w-[240px]">
        <CSelect
          value={selectedStatus}
          label="Holat"
          handlerValue={(val: any) => handleSelect(val, "position")}
          options={optionsStatus}
          id="filter"
        />
      </div>

      <div className="w-[240px]">
        <CSelect
          label="Viloyat"
          handlerValue={(val: any) => handleSelect(val, "region")}
          value={regionValue}
          options={Regions}
          id="filter"
        />
      </div>
      <div className="w-[240px]">
        <CSelect
          label="Klass"
          handlerValue={(val: any) => handleSelect(val, "class")}
          value={typeCar}
          options={classStatus}
          id="filter"
        />
      </div>
    </div>
  );
}

export default MapOption;
