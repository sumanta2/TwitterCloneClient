import { Modal, useMantineTheme } from '@mantine/core';
import "./ProfileModal.css"

function ProfileModal({modalOpened,setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal style={{display:"flex"}}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={()=>setModalOpened(false)}
    >
        <form  className="infoFrom">
            <h3>Your info</h3>
            <div>
                <input type="text" className="infoInput" name="FirstName" placeholder="First Name"/>
                <input type="text" className="infoInput" name="LastName" placeholder="Last Name"/>
            </div>
            <div>
            <input type="text" className="infoInput" name="worksAT" placeholder="Works At"/>
            </div>
            <div>
                <input type="text" className="infoInput" name="livesIN" placeholder="Lives in"/>
                <input type="text" className="infoInput" name="Country" placeholder="Country"/>
            </div>
            <div>
            <input type="text" className="infoInput" name="rs" placeholder="Relationship Status"/>
            </div>
            <div>
                Profile Image 
                <input type="file" name="profileImg"/>
                Cover Image
                <input type="file" name="CoverImg"/>
            </div>
            <button className="button infoButton">Updata</button>
        </form>
    </Modal>
  );
}
export default ProfileModal
