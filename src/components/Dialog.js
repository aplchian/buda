import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import {Checkbox} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import PreviewImage from './PreviewImage'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

export default function SettingsDialog(props) {
    const { setImageView, imageView } = props

    return (
        <Dialog
            onClose={props.handleClose}
            aria-labelledby="customized-dialog-title"
            open={props.open}
            fullWidth
        >
            <DialogTitle
                id="customized-dialog-title"
                onClose={props.handleClose}
            >
                Edit
            </DialogTitle>
            <DialogContent>
                <FormControlLabel
                    labelPlacement="top"
                    control={
                        <Select
                            native
                            value="english"
                            onChange={x => {
                                console.log('selected', x)
                            }}
                            style={{ width: 155 }}
                            inputProps={
                                {
                                    // name: 'type',
                                    // id: 'type',
                                }
                            }
                        >
                            <option value="file">English</option>
                            <option value="missing">Tibetan</option>
                        </Select>
                    }
                    label="Default Language"
                />
            </DialogContent>
            <DialogContent
                dividers
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}
            >
                <TextField
                    label="Volume Name"
                    variant="filled"
                    type="text"
                    value={'S4SA'}
                />
                <FormControlLabel
                    style={{ display: 'block' }}
                    control={
                        <Checkbox
                            checked={true}
                            onChange={x => console.log('x', x)}
                            value="show-checked-images"
                            color="primary"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                    }
                    label="Show Checked Images"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={true}
                            onChange={x => console.log('x', x)}
                            value="show-hiddel-images"
                            color="primary"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                    }
                    label="Show Hidden Images"
                />
                <FormControlLabel
                    labelPlacement="start"
                    control={
                        <Select
                            native
                            value="english"
                            onChange={x => {
                                console.log('selected', x)
                            }}
                            style={{ width: 155 }}
                            inputProps={
                                {
                                    // name: 'type',
                                    // id: 'type',
                                }
                            }
                        >
                            <option value="missing">Tibetan</option>
                        </Select>
                    }
                    label="Volume Language"
                />
            </DialogContent>
            <DialogContent dividers>
                <h3>Input 1</h3>
                <FormControlLabel
                    labelPlacement="start"
                    control={
                        <Select
                            native
                            value="folio"
                            onChange={x => {
                                console.log('selected', x)
                            }}
                            style={{ width: 155 }}
                            inputProps={
                                {
                                    // name: 'type',
                                    // id: 'type',
                                }
                            }
                        >
                            <option value="folio">Folio</option>
                        </Select>
                    }
                    label="Pagination Type"
                />
                <FormControlLabel
                    style={{ display: 'block' }}
                    control={
                        <Checkbox
                            checked={true}
                            onChange={x => console.log('x', x)}
                            value="input-whole-margin"
                            color="primary"
                            inputProps={{
                                'aria-label': 'primary checkbox',
                            }}
                        />
                    }
                    label="add input for whole margin"
                />
                <h3>Preview</h3>
                <PreviewImage
                    i={2323}
                    setImageView={setImageView}
                    imageView={imageView}
                    zoom={imageView.zoom}
                    showUpdateView
                />
                <div className="block">
                    <TextField
                        label="Section 1 name"
                        variant="filled"
                        type="text"
                        value={'Val 1'}
                    />
                    <Select
                        native
                        value="english"
                        onChange={x => {
                            console.log('selected', x)
                        }}
                        style={{ width: 155 }}
                        inputProps={
                            {
                                // name: 'type',
                                // id: 'type',
                            }
                        }
                    >
                        <option value="missing">Tibetan</option>
                    </Select>
                </div>
                <div className="block">
                    <TextField
                        label="Section 2 name"
                        variant="filled"
                        type="text"
                        value={'Val 2'}
                    />
                    <Select
                        native
                        value="english"
                        onChange={x => {
                            console.log('selected', x)
                        }}
                        style={{ width: 155 }}
                        inputProps={
                            {
                                // name: 'type',
                                // id: 'type',
                            }
                        }
                    >
                        <option value="missing">Tibetan</option>
                    </Select>
                </div>
                <div className="block">
                    <TextField
                        label="Indication (odd)"
                        variant="filled"
                        type="text"
                        value={'{volname}-{sectionname}-{pagenum:bo}'}
                    />
                </div>
                <div className="block">
                    <TextField
                        label="Indication (even)"
                        variant="filled"
                        type="text"
                        value={'{volname}'}
                    />
                </div>
            </DialogContent>
            <DialogContent dividers>
                <h3>Comments</h3>
                <div className="block">
                    {/*<TextField*/}
                    {/*    label="Indication (even)"*/}
                    {/*    variant="filled"*/}
                    {/*    type="textarea"*/}
                    {/*    value={'{volname}'}*/}
                    {/*/>*/}
                    <TextareaAutosize  rowsMin={3} placeholder="Minimum 3 rows" value={'ka kha'} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={props.handleClose} color="primary">
                    Save changes
                </Button>
            </DialogActions>
        </Dialog>
    )
}
