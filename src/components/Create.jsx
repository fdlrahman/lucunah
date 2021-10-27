import React, { useState } from "react";
import "../style/components/Create.scss";
import { CKEditor } from "ckeditor4-react";
import Button from "./Button";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";
import { toUpAnimation } from "../Animation";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Create({ animateCustom, handleSendData }) {
    let history = useHistory();

    const [title, setTitle] = useState("");
    const [urlImage, setUrlImage] = useState("");
    const [desc, setDesc] = useState("");
    const [editor, setEditor] = useState({});
    const [lengths, setLengths] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title.length > 0 && urlImage.length > 0 && desc.length > 0) {
            const handle = await handleSendData(title, urlImage, desc);

            setTitle("");
            setUrlImage("");
            editor.editor.setData("");

            swal({
                title: "Your blog has been added.",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
                icon: "success",
                buttons: ["Close", "See Blogs"],
            }).then((willDelete) => {
                if (willDelete) {
                    history.push("/blogs");
                }
            });
        } else {
            setLengths([title.length, urlImage.length, desc.length]);
        }
    };

    return (
        <motion.div variants={toUpAnimation} animate={animateCustom} transition={{ type: "tween" }} className="create">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    {lengths.length > 0 && !lengths[0] && (
                        <p className="text-danger">
                            <small>Title field is required.</small>
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="image">Url Image</label>
                    <input type="text" id="image" onChange={(e) => setUrlImage(e.target.value)} value={urlImage} />
                    {lengths.length > 0 && !lengths[1] && (
                        <p className="text-danger">
                            <small>Url Image field is required.</small>
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="editor1">Desc</label>
                    <CKEditor
                        className="ckeditor"
                        initData={desc}
                        onChange={(editor) => {
                            setDesc(editor.editor.getData());
                            setEditor(editor);
                        }}
                    />
                    {lengths.length > 0 && !lengths[2] && (
                        <p className="text-danger">
                            <small>Desc field is required.</small>
                        </p>
                    )}
                </div>

                <Button content="Create" icon={<AiOutlinePlus />} isForm={true} />
            </form>
        </motion.div>
    );
}

export default Create;
