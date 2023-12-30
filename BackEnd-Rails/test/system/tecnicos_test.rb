require "application_system_test_case"

class TecnicosTest < ApplicationSystemTestCase
  setup do
    @tecnico = tecnicos(:one)
  end

  test "visiting the index" do
    visit tecnicos_url
    assert_selector "h1", text: "Tecnicos"
  end

  test "should create tecnico" do
    visit tecnicos_url
    click_on "New tecnico"

    fill_in "Ape tec", with: @tecnico.APE_TEC
    fill_in "Fec ing tec", with: @tecnico.FEC_ING_TEC
    fill_in "Fec nac tec", with: @tecnico.FEC_NAC_TEC
    fill_in "Nom tec", with: @tecnico.NOM_TEC
    click_on "Create Tecnico"

    assert_text "Tecnico was successfully created"
    click_on "Back"
  end

  test "should update Tecnico" do
    visit tecnico_url(@tecnico)
    click_on "Edit this tecnico", match: :first

    fill_in "Ape tec", with: @tecnico.APE_TEC
    fill_in "Fec ing tec", with: @tecnico.FEC_ING_TEC
    fill_in "Fec nac tec", with: @tecnico.FEC_NAC_TEC
    fill_in "Nom tec", with: @tecnico.NOM_TEC
    click_on "Update Tecnico"

    assert_text "Tecnico was successfully updated"
    click_on "Back"
  end

  test "should destroy Tecnico" do
    visit tecnico_url(@tecnico)
    click_on "Destroy this tecnico", match: :first

    assert_text "Tecnico was successfully destroyed"
  end
end
