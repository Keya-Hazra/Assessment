/* eslint-disable */
import { createStyles, makeStyles } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop/Backdrop'
import Fade from '@material-ui/core/Fade/Fade'
import Modal from '@material-ui/core/Modal/Modal'
import { AiOutlineClose } from 'react-icons/ai'

const useStyles = makeStyles(() => createStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 1rem',
  },
}))

interface props {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

function CustomModal({
  open, onClose, children,
}:props) {
  const classes = useStyles()

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className="relative flex flex-1 max-w-xl p-8 mr-4 text-white border rounded-md bg-bgRight border-white/20">
          <button
            type="button"
            className="absolute z-10 inline-block p-1 transition duration-300 ease-in-out rounded-full cursor-pointer bg-bgRight border border-white/20 right-[-18px] top-[-18px]"
            onClick={onClose}
          >
            <AiOutlineClose className="w-6 h-6 text-white fill-current" />

          </button>
          <div className="w-full overflow-hidden rounded-md">{children}</div>
        </div>
      </Fade>
    </Modal>
  )
}

export default CustomModal
