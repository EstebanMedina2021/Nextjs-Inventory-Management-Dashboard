import { UserSetting } from "@/utils/interfaces/interfaces";
import React, { useState } from "react";
import { Label } from "recharts";

const mockSettings: UserSetting[] = [
  { label: "UserName", value: "jon_doe", type: "text" },
  { label: "Email", value: "jon_doe@gmail.com", type: "text" },
  { label: "Notification", value: true, type: "toggle" },
  { label: "Dark Mode", value: false, type: "toggle" },
  { label: "Language", value: "English", type: "text" },
];
function Settings() {
  const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

  const handleToggleChange = (index: number) => {
    const settingsCopy = [...userSettings];
    settingsCopy[index].value = !settingsCopy[index].value as boolean;
    setUserSettings(settingsCopy);
  };

  return <div>Settings</div>;
}

export default Settings;
