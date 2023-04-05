# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Purpose: BlogPostsController is a child class of ApplicationController
# Functionality: The controller will define all the methods needed for all CRUD actions. These methods are used to interact with the database on the backend and give the user a view of information on the frontend. 
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # Purpose: The index method is allowing the user to see all the information in the database.
    # Functionality: Creating an instance variable called posts that stores all the database information from the BlogPost.all postgresql command.
    @posts = BlogPost.all
  end

  # ---3)
  # Purpose: The show method allows the user to see one single instance from the database.
  # Functionality: Inside the show method, a variable called post is storing the information of a single instance from the database. BlogPost.find is searching the database for a specific id(which is provided as params in parenthesis).  
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Purpose: The new method will display a form to interact with on the frontend of an application. 
  # Functionality: A form will be created for the user to enter information in to add instances to the database. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Purpose: The create method will add information to the database. 
    # Functionality: A new instance will be created using BlogPost.create. Importantly, strong params are passed to create because the creator of the application only wants specific, defined information to be added into the database. In the Blog Post applications case, only title and content will be added. If the params added are valid, the user will be redirected to the same page with the form to add more instances in the database. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Purpoe: The user is displayed a form to edit information in the database. 
    # Functionality: While a form is displayed to the user on the frontend, the database will find the data by the provided id and return that for editing. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Purpose: Gives the user the ability to update a blog post if needed. 
    # Functionality: While updating a given blog post, strong params are still passed to ensure permitted data is valid. Upon validation, the user will be redirected to the page to view the updated blog. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # Purpose: Giving the user a view upon deleting an instance in the database. 
      # Functionality: Upon successful deletion, the page will redirect to show all the blog posts with the deleted blog no longer there. 
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # Purpose: The keyword private restricts the use of any methods below the word to only the scope of controller class. 
  # Functionality: Allows strong params to be declared and protected for use with other controller methods. 
  private
  def blog_post_params
    # ---10)
    # Purpose: Setting requirements to be permitted into the database. 
    # Functionality: Requiring the attributes to be passed in and then defining the allowed data to be permitted. Any attributes not defined, will not be allowed into the database. 
    params.require(:blog_post).permit(:title, :content)
  end
end
