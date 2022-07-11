import React, { useState } from 'react';
import Dialog from './index';
import Icon from '../Icon';
import { action } from '@storybook/addon-actions';
import Button from '../Button';
import { DialogTitle, DialogActions, DialogContents } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: { onClick: { action: 'clicked' } },
};

const exampPara: string = "Sed fringilla tortor arcu, vel malesuada dui molestie vitae. In efficitur odio eget odio tempus vehicula vitae vitae sem."


export const DialogSimple = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button
        onMouseDown={action('Dialog opened')}
        onClick={() => { setShow(show => !show) }
        }>Show</button>


      <Dialog
        showDialog={show}
        id='ide'
        OverlayAtributes={{ id: 'id' }}
        onMouseDown={action('Dialog closed')}
        onClose={() => {
          setShow(show => !show)
        }
        }
      >
        <DialogTitle>
          <h2>Hi </h2>
        </DialogTitle>
        <DialogContents>
          <p>
            <Icon
              disabled={false}
              loading={false}
              name="users"
            /> username@gmail.com </p>

          <div>
            <p>   <Icon
              disabled={false}
              loading={false}
              name="users"
            /> username@gmail.com </p>
          </div>

          <div>
            <p>  <Icon
              disabled={false}
              loading={false}
              name="users"
            /> user02@gmail.com </p>
          </div>
          <div>
            <p>   <Icon
              disabled={false}
              loading={false}
              name="plus"
            /> Add acount </p>
          </div>
        </DialogContents>

      </Dialog>

    </div >
  )
};

export const DialogAlert = () => {
  const [show, setShow] = useState(false)
  return (
    <div>

      <button
        onMouseDown={action('Dialog opened')}
        onClick={() => { setShow(show => !show) }}>Show</button>


      <Dialog
        onClick={action('Dialog closed')}
        showDialog={show}
        onClose={() => {
          setShow(false)
        }}
      >
        <DialogTitle><h3>Vestibulum porta quam in euismod fringilla</h3></DialogTitle>
        <DialogContents>
          {exampPara}
        </DialogContents>
        <DialogActions>
          <div>
            <button > Disagree</button>
            <button onClick={() => setShow(false)}> Agree and Close</button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
};


export const DialogForm = () => {
  const [show, setShow] = useState(false)
  const [inputValue, setinputvalue] = useState("")
  return (
    <div>
      <button

        onClick={() => setShow(show => !show)}>Show</button>


      <Dialog
        id='example'
        onClick={action('Dialog closed')}
        showDialog={show}
        onClose={() => {
          setShow(false)
        }} >
        <DialogTitle
          id='Hello!'>
          <h1>A Super Google Title</h1>
        </DialogTitle>

        <DialogContents>
          <p> {exampPara + exampPara}</p>
        </DialogContents>

        <DialogActions>
          <input onChange={(e) => setinputvalue(e.target.value)} value={inputValue} placeholder="Enter email here"></input>
          <div >
            <a onClick={action('Dialog closed')}> Disagree</a>
            <a onClick={() => {
              alert(`The Value is: ${inputValue}`)
              setShow(false)
            }}> Agree and Close</a>
          </div>
        </DialogActions>
      </Dialog>


    </div>)
};


export const DialogTest = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(show => !show)}>show dialog</button>
      <Dialog
        onClose={() => setShow(false)}
        showDialog={show}
      >
        Hello here is just some Dialog
      </Dialog>
    </div>
  ) 
}
|?

export const DialogExample = () => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(show => !show)}>show dialog</button>
      <Dialog
        showDialog={show}
        onClose={() => {
          alert("I am I have closed ")
          setShow(false)
        }
        }
      >
        Hi how are you

        <DialogContents onClick={() => setShow(false)} style={{ 'border': '1px red solid', 'width': '100px', 'height': '100px', 'margin': '100px' }}>

          Click to close!
        </DialogContents>
      </Dialog>
    </div>
  )

}