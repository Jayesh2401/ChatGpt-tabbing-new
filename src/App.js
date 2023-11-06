import logo from "./logo.svg";
import "./App.css";
import { GrFormEdit } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TbRefresh } from "react-icons/tb";
import { useState } from "react";

function App() {
  const [tabs, setTabs] = useState(1);
  const [setting, setSetting] = useState("forTypeSettingActive");
  const [type, setType] = useState("fortypeActive");
  const [chat, setChat] = useState("forTypeChatActive");

  return (
    <div className="mainContainer">
      <section className="bgColor">
        <div className="firstSection">
          <div className={`${setting} settingsTab`}>
            <h5
              onClick={() => {
                setSetting("forSettingActive");
                setType("forSettingTypeActive");
                setChat("forSettingChatActive")
              }}
            >
              Settings
            </h5>
            {/* <div className="settingUI test">
              <h4>Chandra Rathakrishnan</h4>
              <p>Color</p>
              <p>FAQs</p>
              <p>Sign out</p>
            </div> */}
          </div>
          <div className={`typeHereTab ${type}`} onClick={() => {
            setSetting("forTypeSettingActive");
            setType("fortypeActive");
            setChat("forTypeChatActive")
          }}>
            <input placeholder="Type here" className="TypehereInput" />
            <div className="typeSentence">
              <div className="editType">
                <div>
                  <IoIosArrowBack /> 1/2 <IoIosArrowForward />
                </div>
                <GrFormEdit />
              </div>
              <h4>Write something nice to send my wife on Valentine’s Day </h4>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <h3>Subject: Happy Valentine's Day, My Love!</h3>
                <TbRefresh />
              </div>
              <p>My dearest [Wife's Name],</p>

              <p>
                Happy Valentine's Day! Today, and every day, I want you to know
                how much you mean to me. You are my rock, my partner in crime,
                and my best friend. I am so grateful to have you by my side, and
                I am constantly amazed by your strength, kindness, and
                unwavering love.
              </p>
              <p>
                You make every day brighter just by being in it, and I am so
                grateful for the love and laughter that we share. Your smile is
                my sunshine, and your laughter is my favourite sound. I feel so
                lucky to be your husband, and I promise to spend the rest of my
                life making you feel loved, cherished, and appreciated.
              </p>
              <p>
                I hope this Valentine's Day is filled with all of your favourite
                things and that you know how much I love you. I may not be able
                to be with you today, but know that you are always in my
                thoughts and in my heart. With all my love,
              </p>
              <p>With all my love,</p>
              <p>[Your Name]</p>
            </div>
          </div>
          <div className={`chatTab ${chat}`}>
            <h5 onClick={() => {
               setSetting("forChatsettingActive");
               setType("forChatTypeActive");
               setChat("forChatActive")
            }}>Chats</h5>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
