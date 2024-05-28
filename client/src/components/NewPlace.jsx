import FormTitles from "./FormTitles";
import FormSubtitles from "./FormSubtitles";
import Perks from "./Perks";
import CheckInfo from "./CheckInfo";
import { useState } from "react";

export default function NewPlace() {
  const [formData, setFormData] = useState({
    title: "",
    address: "",
    photos: [],
    description: "",
    perks: [],
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });
  const [photoLink, setPhotoLink] = useState("");
  const [perks, setPerks] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form className="w-2/4">
        <FormTitles>Title</FormTitles>
        <FormSubtitles>title for this accomodation</FormSubtitles>
        <input
          type="text"
          placeholder="ex: 'My lovely apartment'"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <FormTitles>Address</FormTitles>
        <FormSubtitles>address for this accomodation</FormSubtitles>
        <input
          type="text"
          placeholder="ex: '5th Avenue, New York'"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <FormTitles>Photos</FormTitles>
        <FormSubtitles>the more photos, the better!</FormSubtitles>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="add photos using a link: .jpg or .png."
            value={photoLink}
            onChange={(ev) => setPhotoLink(ev.target.value)}
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
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <FormTitles>Perks</FormTitles>
        <FormSubtitles>select all the perks of your place</FormSubtitles>
        <Perks selected={perks} onChange={setPerks} />
        <FormTitles>Extra information</FormTitles>
        <FormSubtitles>
          give all useful information! ex: house rules, etc.
        </FormSubtitles>
        <textarea
          name="extraInfo"
          value={formData.extraInfo}
          onChange={handleChange}
        />
        <FormTitles>Check-in & Check-out, maximum guests</FormTitles>
        <FormSubtitles>
          specify the check-in/out window and the maximum number of guests
        </FormSubtitles>
        <div className="grid sm:grid-cols-3 gap-2">
          <CheckInfo
            tooltip="16:00"
            titleH="Check-in time"
            nameOf="checkIn"
            valueOf={formData.checkIn}
            onChange={handleChange}
          />
          <CheckInfo
            tooltip="18:00"
            titleH="Check-out time"
            nameOf="checkOut"
            valueOf={formData.checkOut}
            onChange={handleChange}
          />
          <CheckInfo
            tooltip="ex: 7 guests"
            titleH="Maximum number of guests"
            nameOf="maxGuests"
            valueOf={formData.maxGuests}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button className="bg-primary text-white my-4 w-2/3 rounded-full p-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
