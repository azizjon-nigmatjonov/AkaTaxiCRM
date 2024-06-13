import usePageRouter from "../../../hooks/useObjectRouter";
import {
  DownloadIcon,
  PlayIcon,
  ListIcon,
  EyeIcon,
} from "../../../components/UI/IconGenerator/Svg";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { AudioModal } from "../../../components/UI/CallModals/AudioModal";
import { NoteModal } from "../../../components/UI/CallModals/NoteModal";
import CSelectColor from "../../../components/CElements/CSelectColor";
import { useForm } from "react-hook-form";

export const TableActions = () => {
  const { navigateQuery, navigateTo } = usePageRouter();
  const options = [
    { value: 'salom', label: 'salom' },
    { value: 'hayr', label: 'hayr' },
    { value: 'salom', label: 'salom' },
  ]
  const headColumns = [
    {
      title: "Vaqti",
      id: "date",
    },
    {
      title: "kim",
      id: "who",
    },
    {
      title: "status",
      id: "status",
    },
    {
      title: "qo'n'giroq",
      id: "phone",
    },
    {
      title: "lead - sabablari",
      id: "lead",
      render: (val: any) => val && (
        <CSelectColor options={options} />
      )
    },
    {
      title: "",
      id: "id",
      render: (id: any) => {
        return id ? (
          <div className="space-x-4">
            <button
              onClick={() =>
                navigateQuery({ modal: "call_audio", user_id: id })
              }
            >
              <PlayIcon />
            </button>
            <button>
              <DownloadIcon />
            </button>
            <button
              onClick={() => navigateQuery({ modal: "note", user_id: id })}
            >
              <ListIcon />
            </button>
            <button onClick={() => navigateTo(`/passengers/passenger-list/748?tab=calls`)}>
              <EyeIcon fill="var(--black)" />
            </button>
          </div>
        ) : (
          ""
        );
      },
    },
  ];

  return { headColumns };
};



export const TableButtonActions = () => {
  const query = useGetQueries();
  const { control } = useForm()
  switch (query.modal) {
    case "call_audio":
      return <AudioModal />;
    case "note":
      return <NoteModal control={control} />;
    default:
      return "";
  }
};