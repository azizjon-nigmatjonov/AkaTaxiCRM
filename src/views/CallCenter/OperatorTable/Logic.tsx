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

export const TableActions = () => {
  const { navigateQuery, navigateTo } = usePageRouter();

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
  switch (query.modal) {
    case "call_audio":
      return <AudioModal />;
    case "note":
      return <NoteModal />;
    default:
      return "";
  }
};