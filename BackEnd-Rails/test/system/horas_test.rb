require "application_system_test_case"

class HorasTest < ApplicationSystemTestCase
  setup do
    @hora = horas(:one)
  end

  test "visiting the index" do
    visit horas_url
    assert_selector "h1", text: "Horas"
  end

  test "should create hora" do
    visit horas_url
    click_on "New hora"

    fill_in "Intervalo", with: @hora.intervalo
    click_on "Create Hora"

    assert_text "Hora was successfully created"
    click_on "Back"
  end

  test "should update Hora" do
    visit hora_url(@hora)
    click_on "Edit this hora", match: :first

    fill_in "Intervalo", with: @hora.intervalo
    click_on "Update Hora"

    assert_text "Hora was successfully updated"
    click_on "Back"
  end

  test "should destroy Hora" do
    visit hora_url(@hora)
    click_on "Destroy this hora", match: :first

    assert_text "Hora was successfully destroyed"
  end
end
