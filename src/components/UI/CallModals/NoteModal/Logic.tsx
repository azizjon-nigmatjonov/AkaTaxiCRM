import { NoteModal } from "../../../../components/UI/CallModals/NoteModal";
import { useForm } from "react-hook-form";
import noteService from "../../../../services/note";
import { Validation } from "./Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";

interface Props {
  refetchList?: () => void
}

export const NoteTableButtonActions = ({ refetchList = () => {} }: Props) => {
    const query = useGetQueries();
    const schema = Validation();
    const { row_id } = useGetQueries();
    const { control, handleSubmit, setValue, reset } = useForm({
      mode: "onSubmit",
      resolver: yupResolver(schema),
    });
    // const { navigateQuery } = usePageRouter();
    const [editData, setEditData]: any = useState({});
  
    const { data: noteData, refetch } = useQuery(
      ["GET_BOOKING_NOTE_LIST", row_id],
      () => {
        return noteService.getList(row_id);
      },
      {
        enabled: !!row_id,
      }
    );
  
  
    const { mutate: notePost, isLoading } = useMutation({
      mutationFn: (data: any) => {
        return noteService.postNote(data).then(() => {
          refetch()
          reset()
          refetchList()
        });
      },
    });
  
  
    const { mutate: deleteNote } = useMutation({
      mutationFn: (id: number) => {
        return noteService.deleteNote(id).then(() => {
          refetch()
          reset()
          refetchList()
        });
      },
    });
  
    const { mutate: updateNote } = useMutation({
      mutationFn: (data: any) => {
        return noteService.updateNote(data).then(() => {
          refetch()
          reset()
          refetchList()
        });
      },
    });
  
    const onSubmit = (data: any) => {
      if (editData?.id) {
        const params = {
          id: editData?.id,
          data: {
            user_id: +row_id,
            ...data,
          },
        };
        updateNote(params);
      } else {
        const params = {
          user_id: +row_id,
          ...data,
        };
        notePost(params);
      }
    };
  
    const handleActions = (element: any, status: string) => {
      if (status === "delete") {
        deleteNote(element.id);
      } else if (status === "edit") {
        setEditData(element);
      }
    };
  
    switch (query.modal) {
      case "note":
        return (
          <NoteModal
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            list={noteData?.data ?? []}
            name="note"
            handleActions={handleActions}
            defaultValue={editData?.note}
            setValue={setValue}
            isLoading={isLoading}
          />
        );
      default:
        return "";
    }
  };
  