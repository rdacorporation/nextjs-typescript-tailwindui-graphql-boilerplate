import Dialog from './Dialog';

interface FileUploadDialogProps {
  open: boolean;
  onUpload: () => void;
  onCancel: () => void;
}

export default function FileUploadDialog({ open = false, onUpload, onCancel }: FileUploadDialogProps) {
  return (
    <Dialog title="File Upload" open={open} setOpen={onCancel}>
      <div className="mt-2">
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Select File
          </label>
        </div>

        <div className="flex w-full items-center">
          <input id="file" name="file" type="file" />
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 mt-7 sm:px-6 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-skin-600 text-base font-medium text-white hover:bg-skin-700 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onUpload}
        >
          Upload
        </button>
        <button
          type="button"
          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </Dialog>
  );
}
