import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
    const {id} = useParams();
    const {title, author_name, category, description, image_url, pdf_url} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery & Thriller",
    "Programming",
    "Science",
    "Fantasy",
    "Horror",
    "Art & Photography",
    "Business & Economics",
    "History",
    "Music",
    "Sports & Recreation",
    "Space",
    "Mathematics",
    "Cooking",
    "Yoga",
    "Travel",
    "Biography & Autobiography",
    "Bibliography",
    "Classics",
    "Sex & Romance",
    "Humor",
    "Children's Books",
    "Textbooks",
    "Exam Preparation",
    "Study Guides",
    "Computers",
    "Architecture",
    "Interior Design",
    "Pets & Animals",
    "Drawing & Illustration",
    "Cartooning & Comics",
    "Storybooks & Children's Literature",
    "Home Decor",
    "Plants & Gardening",
    "Architectural History",
    "Craft",
    "Nature",
    "Puzzles",
    "Electronics",
    "Make Your Own Gadgets",
    "Chemistry",
    "Physics",
    "Health",
    "Medical",
    "Religion",
    "Discovery",
    "Invention",
    "Experiments",
    "Microbiology",
    "Outer Space",
    "Medicine",

  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // Handle Book Submission
  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
      const title = form.title.value;
      const author_name = form.author_name.value;
      const image_url = form.image_url.value;
      const category = form.categoryName.value;
      const description = form.description.value;
      const pdf_url = form.pdf_url.value;
      
      const updateBookObj = {
        title, author_name, image_url, category, description, pdf_url
      }
      
      // console.log(bookObj)
      // Update Book Data after Fetching

      fetch(`http://localhost:5000/book/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data => { 
        // console.log(data)
        alert("Book Data Modified Successfully!!!")
 })

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
          { /* First Row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Book Title" />
              </div>
            <TextInput id="title" name="title" type="text" placeholder="Book Name" required 
            defaultValue={title}
            />
            </div>

           { /* Author Name */ }
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="author_name" value="Author Name" />
              </div>
            <TextInput id="author_name" name="author_name" type="text" placeholder="Author Name" required defaultValue={author_name}/>
            </div>
          </div>

          { /* Second Row */ }
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="image_url" value="Book Image URL" />
              </div>
            <TextInput id="image_url" name="image_url" type="text" placeholder="Book Image URL" required defaultValue={image_url}/>
            </div>

           { /* Category */ }
            <div className='lg:w-1/2'>
              <div className="mb-2 block">
                <Label htmlFor="inputState" value="Book Category" />
              </div>
              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
                {
                  bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
              </Select>
             </div>
             
          </div>

          { /* Book Description */ }
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Book Description" />
            </div>
            <Textarea id="description" name="description" placeholder="Write your book description..." required className='w-full' rows={6} defaultValue={description}/>
          </div>

          { /* Book PDF Link */ }
          <div>
            <div className="mb-2 block">
              <Label htmlFor="pdf_url" value="Book PDF URL" />
            </div>
            <TextInput id="pdf_url" name="pdf_url" type="text" placeholder="Book PDF URL" required defaultValue={pdf_url}/>
          </div>

          <Button type="submit" className='mt-5'>
            Update Existing Book Entry
          </Button>

        </form>
      </div>
  )

}

export default EditBooks