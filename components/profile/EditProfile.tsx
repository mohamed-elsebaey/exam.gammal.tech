"use client";
import SubmitButton from "@/ui/SubmitButton";
import React, { useActionState, useState } from "react";

import ProfileAvatar from "./ProfileAvatar";
import { profileEditActions } from "@/actions/profileEditActions";

function EditProfile({ userData }: any) {
  const [formState, formAction] = useActionState(profileEditActions, {});
  console.log(formState)
  const names = (userData.name || "").split(" ");
  const first_name = names[0] || "";
  const last_name = names.slice(1).join(" ") || "";

  const [firstName, setFirstName] = useState(first_name || "");
  const [lastName, setLastName] = useState(last_name || "");

  const [country, setCountry] = useState(userData.country || "");
  const [phone, setPhone] = useState(userData.phone || "");

  const [age, setAge] = useState(userData.age || "");
  const [university, setUniversity] = useState(userData.university || "");
  const [school, setSchool] = useState(userData.school || "");
  const [city, setCity] = useState(userData.city || "");
  const [bio, setBio] = useState(userData.bio || "Coder");

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value.replace(/\s/g, ""));
  };
  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value.replace(/\s/g, ""));
  };

  const handleCountryChange = (event: any) => {
    setCountry(event.target.value);
  };
  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value.replace(/\s/g, ""));
  };
  const handleAgeChange = (event: any) => {
    setAge(event.target.value.replace(/\s/g, ""));
  };
  const handleUniversityChange = (event: any) => {
    setUniversity(event.target.value);
  };
  const handleSchoolChange = (event: any) => {
    setSchool(event.target.value);
  };
  const handleCityChange = (event: any) => {
    setCity(event.target.value);
  };
  const handleBioChange = (event: any) => {
    setBio(event.target.value);
  };

  return (
    <section className=" bg-gradient-to-r from-primary/10 to-primary2/10 py-28 lg:py-[90px]">
      <div className="w-full mx-auto max-w-[750px] overflow-hidden rounded-lg bg-white px-10 py-16  sm:px-12 md:px-[60px]-2">
        <form
          className="w-full py-1 md:w-2/3 lg:w-3/4 mx-auto"
          action={formAction}
        >
          <ProfileAvatar imagePath={userData.image_url} addButtons />

          <div className="items-center mt-8 sm:mt-14 text-primary">
            <div className="mb-2 sm:mb-6">
              <Input
                label="Profile Bio"
                type="text"
                name="bio"
                value={bio}
                onChange={handleBioChange}
                placeholder="Coder"
              />
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="first name"
                  name="first_name"
                  type="text"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>

              <div className="w-full">
                <Input
                  label="last name"
                  type="text"
                  name="last_name"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>

            <div className="mb-2 sm:mb-6">
              <Input
                label="Email"
                readOnly
                type="email"
                name="email"
                value={userData.email}
                placeholder="your.email@mail.com"
                required
              />
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="Age"
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={age}
                  onChange={handleAgeChange}
                />
              </div>
              <div className="w-full">
                <Input
                  label="Phone Number"
                  type="text"
                  name="phone"
                  placeholder="Your phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={14}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
              <div className="w-full">
                <Input
                  label="Country"
                  type="text"
                  name="country"
                  placeholder="Your country"
                  value={country}
                  onChange={handleCountryChange}
                />
              </div>
              <div className="w-full">
                <Input
                  label="City"
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
            </div>

            <div className="mb-2 sm:mb-6">
              <div className="w-full">
                <Input
                  label="University"
                  type="text"
                  name="university"
                  placeholder="university"
                  value={university}
                  onChange={handleUniversityChange}
                />
              </div>
            </div>
            <div className="mb-2 sm:mb-6">
              <div className="w-full">
                <Input
                  label="School"
                  type="text"
                  name="school"
                  placeholder="school"
                  value={school}
                  onChange={handleSchoolChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <SubmitButton text="Save" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EditProfile;

const Input = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  readOnly,
  maxLength,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange?: any;
  required?: boolean;
  readOnly?: boolean;
  maxLength?: number;
}) => {
  return (
    <>
      <label className="block mb-2 text-sm font-medium text-primary/90 ">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="bg-primary/5 border border-primary/30 text-primary/90 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full p-2.5 shadow-sm transition duration-200  focus:outline-none focus:ring "
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        maxLength={maxLength}
      />
    </>
  );
};
