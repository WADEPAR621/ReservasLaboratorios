class BooksController < ApplicationController
  before_action :set_book, only: %i[ show edit update destroy ]

  # GET /books or /books.json
  def index
    @books = Book.all
    render json: @books
  end

  # GET /books/1 or /books/1.json
  def show
    render json: @book
  end
  
  #GET /books/by_user/1
  def by_user
    @books = Book.where(Student_id: params[:student_id])
    render json: @books
  end

  #GET /books/by_technician/1
  def by_technician
    @books = Book.where(Tecnico_id: params[:tecnico_id], EST_RES: false)
    render json: @books
  end

  #GET /books/updateEST_TES/1
  def update_est_res_to_true
    @book = Book.find(params[:id])  # Encuentra el libro por su ID
    if @book.update(EST_RES: true)  # Intenta actualizar el atributo EST_RES a true
      render json: { message: 'EST_RES actualizado correctamente a true' }, status: :ok
    else
      render json: { error: 'No se pudo actualizar EST_RES' }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound => e
    render json: { error: 'Libro no encontrado' }, status: :not_found
  end

  # GET /books/new
  def new
    @book = Book.new
  end

  # GET /books/1/edit
  def edit
  end

  # POST /books or /books.json
  def create
    @book = Book.new(book_params)
    if @book.save
      redirect_to @book, notice: 'Book was successfully created.'
    else
      render :new
    end
  end

  # PATCH/PUT /books/1 or /books/1.json
  def update
    if @book.update(book_params)
      render json: { message: 'Book was successfully updated.', book: @book }, status: :ok
    else
      render json: { errors: @book.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # DELETE /books/1 or /books/1.json
  def destroy
    @book.destroy!

    respond_to do |format|
      format.html { redirect_to books_url, notice: "Book was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.require(:book).permit(:Student_id, :Tecnico_id, :Room_id, :RAZ_RES, :HOR_INI_RES, :HOR_FIN_RES, :EST_RES, :EST_TIM_RES)
    end
end
