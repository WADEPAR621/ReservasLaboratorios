require "application_system_test_case"

class DiaSemanasTest < ApplicationSystemTestCase
  setup do
    @dia_semana = dia_semanas(:one)
  end

  test "visiting the index" do
    visit dia_semanas_url
    assert_selector "h1", text: "Dia semanas"
  end

  test "should create dia semana" do
    visit dia_semanas_url
    click_on "New dia semana"

    fill_in "Nombre", with: @dia_semana.nombre
    click_on "Create Dia semana"

    assert_text "Dia semana was successfully created"
    click_on "Back"
  end

  test "should update Dia semana" do
    visit dia_semana_url(@dia_semana)
    click_on "Edit this dia semana", match: :first

    fill_in "Nombre", with: @dia_semana.nombre
    click_on "Update Dia semana"

    assert_text "Dia semana was successfully updated"
    click_on "Back"
  end

  test "should destroy Dia semana" do
    visit dia_semana_url(@dia_semana)
    click_on "Destroy this dia semana", match: :first

    assert_text "Dia semana was successfully destroyed"
  end
end
