import Note from "../../models/Note.js";


export  async function getAllNotes(_,res){
    try{
        const notes = await Note.find().sort({createdAt : -1}) // if -1 sort in descending(newest first), if 1 sort in ascending(oldest first)
        res.status(200).json(notes)

    } catch (error) {
        console.error("Error in getAllNotes controller", error)

        res.status(500).json({message:"Internal server error"})
    }
};

export  async function getNoteById(req,res){
    try{
        const note = await Note.findById(req.params.id)
        if (!note) res(404).json({message:"Note not found"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function createNote(req,res){
    try{
        const {title, content} = req.body
        const note = new Note({title:title, content:content})
        const savedNote = await note.save()
        //await newNote.save()
        res.status(201).json(savedNote)
    } catch(error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message:"Internal server error"})

    }
};

export async function updateNote(req,res){
    try{
    const {title, content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new:true})
    if (!updatedNote) res.status(404).json({message :"Note not found"})
    res.status(200).json({message: "Note updated sucessfully"})
    } catch (error){
        console.error("Error in updateNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
};

export async function deleteNote(req,res){
    try{
        const {title, body} = req.body
        const deletedNote = await Note.findByIdAndDelete(req.params.id)
        if (!deletedNote) res.status(404).json({message :"Note not found"})
        res.status(200).json({message: "Note deleted sucessfully"})
    } catch (error){
        console.error("Error in deleteNote controller", error)
        res.status(500).json({message:"Internal server error"})
    }
};