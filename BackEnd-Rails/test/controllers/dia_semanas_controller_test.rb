require "test_helper"

class DiaSemanasControllerTest < ActionDispatch::IntegrationTest
  setup do
    @dia_semana = dia_semanas(:one)
  end

  test "should get index" do
    get dia_semanas_url
    assert_response :success
  end

  test "should get new" do
    get new_dia_semana_url
    assert_response :success
  end

  test "should create dia_semana" do
    assert_difference("DiaSemana.count") do
      post dia_semanas_url, params: { dia_semana: { nombre: @dia_semana.nombre } }
    end

    assert_redirected_to dia_semana_url(DiaSemana.last)
  end

  test "should show dia_semana" do
    get dia_semana_url(@dia_semana)
    assert_response :success
  end

  test "should get edit" do
    get edit_dia_semana_url(@dia_semana)
    assert_response :success
  end

  test "should update dia_semana" do
    patch dia_semana_url(@dia_semana), params: { dia_semana: { nombre: @dia_semana.nombre } }
    assert_redirected_to dia_semana_url(@dia_semana)
  end

  test "should destroy dia_semana" do
    assert_difference("DiaSemana.count", -1) do
      delete dia_semana_url(@dia_semana)
    end

    assert_redirected_to dia_semanas_url
  end
end
