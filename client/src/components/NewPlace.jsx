import FormTitles from "./FormTitles";
import FormSubtitles from "./FormSubtitles";

export default function NewPlace() {
  return (
    <div className="flex justify-center items-center">
      <form className="w-2/4">
        <FormTitles>Title</FormTitles>
        <FormSubtitles>title for this accomodation</FormSubtitles>
        <input type="text" placeholder="ex: 'My lovely apartment'" />
        <FormTitles>Address</FormTitles>
        <FormSubtitles>address for this accomodation</FormSubtitles>
        <input type="text" placeholder="ex: '5th Avenue, New York'" />
        <FormTitles>Photos</FormTitles>
        <FormSubtitles>the more photos, the better!</FormSubtitles>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="add photos using a link: .jpg or .png."
          />
          <button className="bg-primary px-4 rounded-2xl text-white">
            Add&nbsp;photo
          </button>
        </div>
        <div className="mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex justify-center gap-2 border bg-transparent rounded-2xl p-8 w-48 text-2xl text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
              />
            </svg>
            Upload
          </button>
        </div>
        <FormTitles>Description</FormTitles>
        <FormSubtitles>describe your place!</FormSubtitles>
        <textarea />
      </form>
    </div>
  );
}
