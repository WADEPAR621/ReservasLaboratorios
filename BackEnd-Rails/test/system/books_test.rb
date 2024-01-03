require "application_system_test_case"

class BooksTest < ApplicationSystemTestCase
  setup do
    @book = books(:one)
  end

  test "visiting the index" do
    visit books_url
    assert_selector "h1", text: "Books"
  end

  test "should create book" do
    visit books_url
    click_on "New book"

    check "Est res" if @book.EST_RES
    fill_in "Hor fin res", with: @book.HOR_FIN_RES
    fill_in "Hor ini res", with: @book.HOR_INI_RES
    fill_in "Raz res", with: @book.RAZ_RES
    fill_in "Room", with: @book.Room_id
    fill_in "Student", with: @book.Student_id
    fill_in "Tecnico", with: @book.Tecnico_id
    click_on "Create Book"

    assert_text "Book was successfully created"
    click_on "Back"
  end

  test "should update Book" do
    visit book_url(@book)
    click_on "Edit this book", match: :first

    check "Est res" if @book.EST_RES
    fill_in "Hor fin res", with: @book.HOR_FIN_RES
    fill_in "Hor ini res", with: @book.HOR_INI_RES
    fill_in "Raz res", with: @book.RAZ_RES
    fill_in "Room", with: @book.Room_id
    fill_in "Student", with: @book.Student_id
    fill_in "Tecnico", with: @book.Tecnico_id
    click_on "Update Book"

    assert_text "Book was successfully updated"
    click_on "Back"
  end

  test "should destroy Book" do
    visit book_url(@book)
    click_on "Destroy this book", match: :first

    assert_text "Book was successfully destroyed"
  end
end
