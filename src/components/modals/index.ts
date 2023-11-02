import NiceModal from "@ebay/nice-modal-react";
import NoteModal from "./NoteModal";
import ConfirmDeletion from "./ConfirmDeletion";

NiceModal.register("create-or-edit-note", NoteModal);
NiceModal.register(
  "confirm-note-deletion",
  ConfirmDeletion
);
